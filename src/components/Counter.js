import classes from './Counter.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {counterActions} from "../store/counter";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => {
        return state.counter.counter;
    });
    const showCounter = useSelector(state => {
        return state.counter.showCounter;
    });

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };

    const increaseHandler = () => {
        dispatch(counterActions.increase(10)); // e.g. { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

// class Counter extends Component {
//     incrementHandler() {
//         this.props.increment();
//     }
//
//     decrementHandler() {
//         this.props.decrement();
//     }
//
//     toggleCounterHandler() {
//
//     }
//
//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{this.props.counter}</div>
//                 <div>
//                     <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//                     <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//                 </div>
//                 <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//             </main>
//         );
//     }
// }
//
// const mapStateToProps = state => {
//     return {
//         counter: state.counter
//     };
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//       increment: () => dispatch({type: 'increment'}),
//       decrement: () => dispatch({type: 'decrement'})
//   }
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;