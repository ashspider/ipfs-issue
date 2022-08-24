import NFTCard from '../NFTCard/NFTCard'
import style from './createNFT.module.css'
import React, { useState } from 'react'
import { create as ipfsClient } from 'ipfs-http-client'
import Web3Modal from 'web3modal'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'


const client = create('https://ipfs.infura.io:5001/api/v0')


 
 
 
  function App() {
      const [fileUrl, updateFileUrl] = useState(``)
      async function onChange(e) {
        const file = e.target.files[0]
        try {
          const added = await client.add(file)
          const url = `https://almond-solution.infura-ipfs.io/${added.path}`
          updateFileUrl(url)
        } catch (error) {
          console.log('Error uploading file: ', error)
        }  
      }
      
       return (
    <>
                            <div className="mb-3">
                            <input
                               type="file"
                               name="Asset"
                               className="my-4"
                               onChange={onChange}
                           />
                              {
                                fileUrl && (
                                <img src={fileUrl} className="rounded mt-4" width="350"  />
                                     )
                                 }
                                
                              
                            </div>
                            
      
      )}
       
     export default App
       
                                
                                
