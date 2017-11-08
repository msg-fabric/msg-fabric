# msg-fabric

Inspired by:
- Alan Kay's vision of messaging between objects in [Smalltalk](https://en.wikipedia.org/wiki/Smalltalk#Messages)
- [Erlang](http://erlang.org/doc/reference_manual/distributed.html) distributed messaging
- Uber's [Ringpop](https://github.com/uber-node/ringpop-node) and [TChannel](https://github.com/uber/tchannel-node)
- [PouchDB](https://pouchdb.com/custom.html) excellent plugin model

### Ecosystem

- Foundational
  - [msg-fabric](https://www.npmjs.com/package/msg-fabric)
  - [msg-fabric-core](https://www.npmjs.com/package/msg-fabric-core)
  - [msg-fabric-packet-stream](https://www.npmjs.com/package/msg-fabric-packet-stream)

- Plugins
  - [msg-fabric-plugin-router-ec](https://npmjs.com/packages/msg-fabric-plugin-router-ec) Eliptic Curve verifable router identify
  - [msg-fabric-plugin-swim-discovery](https://npmjs.com/packages/msg-fabric-plugin-swim-discovery)
    - **SWIM:** Scalable Weakly-consistent Infection-style Process Group Membership Protocol [PDF](http://www.cs.cornell.edu/~asdas/research/dsn02-SWIM.pdf)
