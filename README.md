## Bill Matching

#### Setup
`npm install`

Add a CSV to the project directory in which the first column contains transactions descriptions and the second column contains a transaction id, [bills-test.csv](./bills-test.csv) has been used as an example.

In the `bills` const on line 11 in file [src/billMatching.js](./src/billMatching.js), add as many bill identifiers as you want in the format:

``` json
{
    billId: string,
    matchers: string[]
}
```

With the billId being a simple bill name and each matcher being a transaction description which could identify that bill.

#### Usage

`npx babel-node src/billMathing.js`

#### Details

After running the script, 2 files will be added to the project directory:

`bills.json`: Contains a list of bills and transaction descriptions which matched that bill.

`processingData.json`: Details regarding the matching of transactions to bills including the intersections value and the full analysed descriptions of both the bill matcher and the transaction.