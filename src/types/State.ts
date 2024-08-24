import {Store} from 'redux';
import {Persistor} from 'redux-persist';
import {AllEffect, ForkEffect} from 'redux-saga/effects';
import {PostModel} from './Model';
interface RootSagaFunc {
  (): Generator<AllEffect<ForkEffect<void>>, void, unknown>;
}
export interface SagaStore extends Store {
  runSaga(rootSaga: RootSagaFunc): void;
  close(): void;
}

export type StoreConfig = {
  store: SagaStore;
  persistor: Persistor;
};

export type Post = {
  posts: PostModel[];
  postLoading: boolean;
};
