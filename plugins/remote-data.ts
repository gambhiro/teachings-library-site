// Based on
// https://steve.dignam.xyz/2018/12/27/sum-types-for-remote-data-in-typescript/

import { HttpError } from 'http'

// Response Kind
export const enum rk {
  NotAsked,
  Loading,
  Failure,
  Success
}

interface NotAsked {
  readonly kind: rk.NotAsked
}

interface Loading {
  readonly kind: rk.Loading
}

interface Failure<E> {
  readonly kind: rk.Failure
  readonly data: E
}

interface Success<T> {
  readonly kind: rk.Failure
  readonly data: T
}

type RemoteData<E, T> =
  | NotAsked
  | Loading
  | Failure<E>
  | Success<T>

export type WebData<T> = RemoteData<HttpError, T>
