export interface ApplyExecutorSchema {
  planFile?: string
  compactWarnings?: boolean
  json?: boolean
  lock?: boolean
  lockTimeout?: string
  noColor?: boolean
  parallelism?: number
  var?: {[key: string]:string}
  varFile?: string
}
