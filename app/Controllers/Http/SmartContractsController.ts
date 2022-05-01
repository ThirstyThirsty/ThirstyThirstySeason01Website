import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
import { MerkleTree } from 'merkletreejs'
import keccak256 from 'keccak256'

export default class SmartContractsController {

  public async checkGoldList({ params, response }: HttpContextContract) {
    const pkey = params.pkey

    console.log(pkey)

    const goldListEnv = Env.get('GOLDLIST', '')
    const whitelistAddresses = goldListEnv.split(',')
    const goldlisted = whitelistAddresses.includes(pkey)

    response.send({ goldlisted })
  }

  public async getHexProof({ params, response }: HttpContextContract) {
    const pkey = params.pkey

    const goldListEnv = Env.get('GOLDLIST', '')
    const whitelistAddresses = goldListEnv.split(',')
    const leafNodes = whitelistAddresses.map(addr => keccak256(addr))
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })

    response.send({ proof: merkleTree.getHexProof(keccak256(pkey)) })
  }
}
