/// <reference types="next" />
/// <reference types="next/types/global" />

declare interface FreeObject {
  [key: string]: any
}

declare interface TypedObject<T> {
  [key: string]: T
}
