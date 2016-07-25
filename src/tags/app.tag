import { countSelector, resetCountSelector } from '../selectors'

<sample-app>
  <p>This tag subscribes with countSelector</p>

  <p>Current count being: { count }</p>
  <p>Last direction being: { direction }</p>

  <p>Reset { resetCount } times</p>

  <sample-counter></sample-counter>
  <script type="text/buble">
    this.subscribe(countSelector)
    this.subscribe(resetCountSelector, (resetCount) => this.update({ resetCount }))
  </script>
</sample-app>
