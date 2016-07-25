import { increaseCounter, decreaseCounter, resetCounter } from '../actions'

<sample-counter>
  <p>This tag allows the user to dispatch counter actions</p>
  <button onclick={ increaseCounter }>INCREASE</button>
  <button onclick={ decreaseCounter }>DECREASE</button>

  <!-- resetCounter needs to be bound because it expects a boolean first argument
       and onclick passes the click event in -->
  <button onclick={ resetCounter.bind(this, true) }>RESET (bound)</button>
  <button onclick={ resetCounterAction }>RESET (action)</button>
  <button onclick={ resetCounterManual }>RESET (manual dispatch)</button>

  <script type="text/buble">
    // calling dispatch directly
    this.resetCounterManual = () => this.dispatch(resetCounter(true))

    this.dispatchify({
      resetCounter, // pass action creator
      resetCounterAction: resetCounter(true), // or pass action

      increaseCounter,
      decreaseCounter
      })
  </script>
</sample-counter>
