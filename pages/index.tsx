import styled from 'styled-components'
import { FC } from 'react'

const VideoCount = styled.span`
  text-shadow: #f03740 1px 0px, #2addfd 2px 0px;
`

interface AlbumProps {
  title: string
  cover: string
}
const Album: FC<AlbumProps> = ({ title, cover }) => (
  <div className="p-1">
    <div className="relative flex">
      <div className="absolute z-0 bg-gray-700 rounded-full w-52 h-52 left-6"></div>
      <div className="absolute z-0 w-48 h-48 bg-white border rounded-lg bg-opacity-70 left-6 top-2"></div>

      <img className="z-10 rounded w-52 h-52" src={cover} alt="" />

      <div className="absolute z-10 text-white bottom-2 right-2">
        <span className="text-lg">♫</span>
        <VideoCount className="text-xs">116</VideoCount>
      </div>
    </div>
    <div className="py-1 text-gray-500">
      <p>{title}</p>
    </div>
  </div>
)

export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div>
        <div className="flex items-center p-1 mb-3">
          <div className="w-1 h-5 mr-3 bg-black rounded-lg"></div>
          <p className="font-thin">全部音单</p>
        </div>
        <Album
          title="【古风】一人一曲"
          cover="https://static.missevan.com/coversmini/201910/12/58276fd81f1bd0b2d12819c6c8eb2f85123410.jpg"
        />
      </div>
    </div>
  )
}
