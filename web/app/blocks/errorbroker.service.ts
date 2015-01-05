module app.blocks {

    export interface IErrorBroker {
        log(error: string): void;
    }

    class ErrorBroker implements IErrorBroker{
            log(error: string): void{}
    }

    angular
        .module('app.blocks')
        .service('app.blocks.ErrorBroker', ErrorBroker);

} 