# Flow Wallet Minimal Error Reproduction

## Background

I am getting a `Frame Send Error` when trying to authenticate with FCL on the emulator, using the emulator wallet. I'm using flow CLI v0.37.0. 

## Steps to reproduce

1. Install flow CLI version 0.37.0
2. Run `flow emulator --contracts`
3. Run `flow dev-wallet -f wallet_flow.json --emulator-host http://localhost:8888`
4. Run `yarn dev`

Navigate to http://localhost:3000 and open the browser console. You should see the following error:

```
Frame Send Error {type: 'FCL:VIEW:READY:RESPONSE', fclVersion: '1.1.0', body: {…}, service: {…}, config: {…}}body: {data: undefined}data: undefined[[Prototype]]: Objectconfig: {discoveryAuthnInclude: Array(0), services: {…}, app: {…}, client: {…}}fclVersion: "1.1.0"service: {params: undefined, data: undefined, type: 'authn'}type: "FCL:VIEW:READY:RESPONSE"[[Prototype]]: Object TypeError: Cannot read properties of undefined (reading 'postMessage')
    at send (fcl.module.js?6838:1100:1)
    at onReady (fcl.module.js?6838:1117:1)
    at eval (fcl.module.js?6838:988:1)
```

## Resolution

This has been resolved by upgrading the Flow CLI to v0.37.2
