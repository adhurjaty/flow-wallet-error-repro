import * as fcl from '@onflow/fcl';

export default class DelphaiInterface {
    private delphaiAddress: string = '0xf8d6e0586b0a20c7';

    constructor() {
        fcl.config()
            .put("accessNode.api", "http://127.0.0.1:8888")
            .put("0xdelphai", this.delphaiAddress)
            .put("discovery.wallet", "http://localhost:8701/fcl/authn")
            .put("challenge.handshake", "http://localhost:8701/fcl/authn")
            // .put("sdk.transport", grpcSend)
            .put("0xFUSD", this.delphaiAddress);
        fcl.authenticate();
    }
}