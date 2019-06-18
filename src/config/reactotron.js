import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  tron.clear();

  // horrible, but useful hack.... oh come on, don't look at me like that... it's JavaScript :|
  // https://github.com/infinitered/reactotron/blob/master/docs/tips.md
  console.tron = tron;
}
