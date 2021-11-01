import { useActiveWeb3React } from 'hooks/web3'
import { Table } from 'reactstrap'

export default function OptionsGrid() {
  const { account, chainId } = useActiveWeb3React()

  return (
    <>
      <Table hover>
        <thead>
          <tr>
            <th>LP</th>
            <th>Lower tick</th>
            <th>Upper tick</th>
            <th>Position size</th>
            <th>Current price</th>
            <th>Token 0</th>
            <th>Token 1</th>
            <th>Value</th>
            <th>Delta</th>
            <th>Beta</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">ETH/Dai</th>
            <td>1500</td>
            <td>2600</td>
            <td>1</td>
            <td>1990</td>
            <td>0.45</td>
            <td>947.06</td>
            <td>0.93</td>
            <td>0.4518</td>
            <td>1</td>
          </tr>
          <tr>
            <th scope="row">ETH/WBTC</th>
            <td>0.05</td>
            <td>0.1</td>
            <td>1</td>
            <td>0.06</td>
            <td>0.6841</td>
            <td>0.0174</td>
            <td>0.9708</td>
            <td>0.6841</td>
            <td>0.545</td>
          </tr>
          <tr>
            <th scope="row">ETH/UNI</th>
            <td>50</td>
            <td>175</td>
            <td>1</td>
            <td>105.5143</td>
            <td>0.33</td>
            <td>48.6256</td>
            <td>0.79</td>
            <td>0.33</td>
            <td>0.912</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}