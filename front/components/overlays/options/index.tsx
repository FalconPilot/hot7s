import * as React from 'react'
import { Dispatch } from 'redux'
import { useDispatch, useSelector } from 'react-redux'

import locales, { languageNames } from '$front/locale'
import { GameAction } from '$front/types'
import { actions } from '$front/actions'
import { gameResolutions } from '$front/constants'
import { systemSelector, text } from '$front/utils'
import { ResolutionOptions } from '$game/types'

import { OverlayWrapper } from '../styled'

const resolutionText = (resolution: ResolutionOptions): string => (
  `${resolution.windowWidth}x${resolution.windowHeight}`
)

export const OptionsOverlay: React.FunctionComponent = () => {
  const [hasChanged, setChange] = React.useState<boolean>(false)
  const dispatch: Dispatch<GameAction> = useDispatch()
  const { options } = useSelector(systemSelector)

  const closeOptions = React.useCallback((): void => {
    dispatch(actions.system.removeOverlay())
  }, [dispatch])

  // Set game resolution
  const setResolution = React.useCallback((evt: React.ChangeEvent<HTMLSelectElement>): void => {
    const raw: string = evt.currentTarget.value
    const [width, height]: number[] = raw
      .split('x')
      .map(v => parseInt(v, 10))

    dispatch(actions.system.updateOptions({
      ...options,
      resolution: {
        windowHeight: height,
        windowWidth: width,
      },
    }))
    setChange(true)
  }, [dispatch, options])

  // Set language
  const setLanguage = React.useCallback((evt: React.ChangeEvent<HTMLSelectElement>): void => {
    const language: keyof typeof locales = evt.currentTarget.value as keyof typeof locales
    dispatch(actions.system.updateOptions({
      ...options,
      game: {
        ...options.game,
        language
      }
    }))
    setChange(true)
  }, [dispatch, options])

  // Save options
  const saveOptions = React.useCallback((): void => {
    dispatch(actions.system.saveOptions(options))
    setChange(false)
  }, [dispatch, options])

  const noRes: string = 'no-res'

  // Initial selected resolution
  const selectedResolution: string = (
    gameResolutions
      .map(resolutionText)
      .find(r => r === resolutionText(options.resolution))
  ) ?? noRes

  // Render
  return (
    <OverlayWrapper>
      <button onClick={closeOptions}>Retour</button>
      {text(options.game.language).system.options}
      <div>
        {text(options.game.language).system.resolution}
        <select onChange={setResolution} defaultValue={selectedResolution}>
          <option disabled value={noRes}>{text(options.game.language).system.noneSelected}</option>
          {gameResolutions.map(resolution => {
            const resText: string = resolutionText(resolution)
            return (
              <option key={resText} value={resText}>{resText}</option>
            )
          })}
        </select>
      </div>
      <div>
        {text(options.game.language).system.language}
        <select onChange={setLanguage} defaultValue={options.game.language}>
          {Object.keys(locales).map(_lang => {
            const lang = _lang as keyof typeof locales
            return <option key={lang} value={lang}>{languageNames[lang]}</option>
          })}
        </select>
      </div>
      <button
        onClick={saveOptions}
        disabled={!hasChanged}
      >{text(options.game.language).system.confirm}</button>
    </OverlayWrapper>
  )
}
