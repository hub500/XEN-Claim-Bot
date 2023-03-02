export default {
    claimBot: 'XEN Claim Bot',
    mobileVisitNotice: 'Please use a desktop browser to visit this page',
    header: {
        xenft: 'XENFT',
        monitor: 'XEN Monitor',
        dashboard: 'Dashboard',
        portfolio: 'Portfolio',
        miner: 'Miner',
        claimbot: 'ClaimBot'
    },
    footer: {
        slogan: 'BUILD CRYPTO FUTURE',
        intro: 'CryptoCell Labs is a platform focusing on blockchain research, knowledge sharing, and data analysis. We aim to make it easier for business insiders to identify market patterns and seize opportunities.',
        copyRights: '© 2022 CryptoCell Labs. All Rights Reserved.'
    },
    datetime: {
        days: 'Days',
        hours: 'Hours',
        minutes: 'Minutes',
        seconds: 'Seconds'
    },
    importFileForm: {
        title: 'Import File',
        desc: 'Import the table file (xls, xlsx, csv) containing addresses & private keys',
        placeholder: 'Choose File',
        notFound: 'Table file not found',
        notSupported: 'File type not supported',
        template: 'Template File',
        notAvailable: 'No address and private key available'
    },
    toClaim: 'To Claim XEN',
    toClaimDesc: 'Before navigate to claim XEN page, the current claimable addresses will be automatically selected and encrypted, then saved to the browser\'s local storage',
    addresses: 'Addresses',
    clearAddresses: 'Clear Addresses',
    totalImported: 'Total Imported',
    currentClaimable: 'Current Claimable',
    walletAddress: 'Wallet Address',
    status: 'Status',
    noMintInfo: 'No Mint Info',
    maturity: 'Maturity',
    term: 'Term Days',
    paramsConfig: 'Configuration',
    walletAddressToReceiveXEN: 'Wallet Address to Receive XEN and Balance',
    maxGwei: 'Max Gwei',
    start: 'Start',
    continue: 'Continue',
    pause: 'Pause',
    ended: 'Ended',
    startNewTask: 'Start New Task',
    configForm: {
        pleaseInput: 'Please input',
        walletAddressFormatError: 'Wallet address format error'
    },
    claimTips: {
        title: 'Tips',
        p1: 'This program simulates human operations, so it is necessary to ensure that the computer is not in standby mode and the network environment is stable. Do not close this page after starting the claim task, and do not open multiple browser tabs for the same operation.',
        p2: 'This program will extract XEN according to the order of the table. After claim XEN from one wallet address, the remaining balance will be transferred to the next wallet address for the next claim task. This will continue until the last wallet address, and the remaining balance of the last wallet address will be transferred to the wallet address that collects XEN.',
        p3: 'Before starting the task, please ensure that the balance of the first wallet address is sufficient to cover the entire extraction and transfer process. To avoid early termination of the process, it is recommended to transfer more, and the remaining balance will be transferred back to the wallet address that receive XEN.',
        p4: 'During the process, the maximum Gwei can be adjusted, but the wallet address that receive XEN cannot be adjusted.',
        p5: 'The code of this program is open source, you can click the Github icon in the upper right corner to view the details, the network communication used in this program only includes necessary communication with the Ethereum node, and the generated content will be saved in the local storage of the browser.'
    },
    logs: 'Logs',
    logsType: {
        noContent: 'No content yet'
    },
    totalAddresses: 'Total Addresses',
    claimStatus: 'Claim Status',
    transferStatus: 'Transfer Status',
    balance: 'Balance',
    actions: 'Actions',
    taskStarted: 'Task started. ',
    taskEnded: 'Task ended. ',
    taskPaused: 'Task paused. ',
    taskContinue: 'Task continue. ',
    executingAddressItem: 'Running # {val} ({address}). ',
    isCheckingBalance: 'Checking balance...',
    balanceIs: 'the balance is {val}. ',
    getBalanceError: 'Get balance error. ',
    isCheckingGwei: 'Checking Gwei... ',
    gweiValid: 'Gwei does not exceed the maximum, continue to execute. ',
    gweiOverMax: 'Gwei exceeds the maximum, the program is on standby, will try again after 5 seconds. ',
    claimXENProcessing: 'Claim XEN in progress... ',
    estimatingGasProcessing: 'Gas estimation in progress... ',
    estimatingGasError: 'Gas estimation error. ',
    claimAndShareProcessing: 'Claim and share XEN in progress... ',
    claimAndShareError: 'Claim and share XEN error. ',
    claimAndShareSend: 'Has sent claim and share XEN transaction, confirming on-chain status... ',
    claimAndShareSendError: 'claim and share XEN on-chain status error. ',
    claimAndShareFinished: 'Finished claim and share XEN. ',
    transferProcessing: 'Transfer in progress... ',
    sendTransferProcessing: 'Sending transfer transaction in progress... ',
    sendTransferError: 'Sending transfer transaction error. ',
    sentTransfer: 'Has sent transfer transaction, confirming on-chain status... ',
    confirmTransferError: 'transfer transaction on-chain status error. ',
    confirmTransferFinished: 'Finished on-chain transfer confirm. ',
}
