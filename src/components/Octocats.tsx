import React from 'react'

type OctocatsProps = {
  name: string
  number: number
  image: string
  creator: string
}
export function Octocat(props: OctocatsProps) {
  return (
    <li>
      <img src={props.image} />
      <div>
        <div>
          <div className="boldedstyle">#{props.number}</div>
          <a className="nuxname">{props.name}</a>
        </div>
        <img className="octodiv" src={props.creator} width="24" />
      </div>
    </li>
  )
}
