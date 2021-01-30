import path from 'path'
import ConfigParser from 'configparser'

import { defaultOptions } from '$constants'
import { AppOptions } from '$types'

const configPath: string = path.resolve(__dirname, '..', '..', 'static', 'options.conf')

const parseConfigNumber = (src: string | undefined): number | null => {
  const n: number = parseInt(src ?? 'NaN', 10)
  return isNaN(n) ? null : n
}

// Parse a single config field
const parseField = (namespace: keyof AppOptions) => <ExpectedValue>(field: string) => (
  parseFunc: (x: string | undefined) => ExpectedValue | null
) => (config: ConfigParser): ExpectedValue | null => parseFunc(config.get(namespace, field))

// Pre-configured namespaced option getters
const parseResolutionOption = parseField('resolution')

// Load options from config file
export const loadConf = (): AppOptions => {
  const config: ConfigParser = new ConfigParser()
  try {
    config.read(configPath)
    return parseConf(config)
  } catch (err) {
    console.warn(err)
    return defaultOptions
  }

}

// Write config file from options
export const writeConf = (options: AppOptions): void => {
  const config: ConfigParser = new ConfigParser()
  Object.entries(options).forEach(([sectionKey, section]: [string, object]): void => {
    config.addSection(sectionKey)
    Object.entries(section).forEach(([optionKey, optionValue]: [string, unknown]): void => {
      config.set(sectionKey, optionKey, optionValue)
    })
  })
  config.write(configPath)
}

// Parse config class to options
export const parseConf = (config: ConfigParser): AppOptions => ({
  resolution: {
    windowHeight:
      parseResolutionOption<number>('windowHeight')(parseConfigNumber)(config) ??
      defaultOptions.resolution.windowHeight,
    windowWidth:
      parseResolutionOption<number>('windowWidth')(parseConfigNumber)(config) ??
      defaultOptions.resolution.windowWidth,
  },
})
