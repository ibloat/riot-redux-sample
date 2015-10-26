bp-counter
  p(class="{red: sign === 'NEGATIVE', green: sign === 'POSITIVE'}")
    | Clicked: {count} times
    button(onclick="{increment}") +
    button(onclick="{decrement}") -

  script.
    import { increment, decrement } from '../../actions/counter'
    import { countSignSelector } from '../../selectors/counterSelectors'

    this.mixin('redux')

    this.dispatchify({
      increment,
      decrement
    })

    this.subscribe(countSignSelector)
