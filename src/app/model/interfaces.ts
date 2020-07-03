export interface Model {
  [key: string]: any
}

export interface Schema {
  [key: string]: any
}

export interface Config {
  schema: Schema,
  model: Model
}
