import React from 'react'

export default function SampleTable(props) {
  return (
    <div><button id="click"
      onClick={() => props.sortBy('id')}> Click Here to Sort by id
    </button>
    <table id="sample">
      <thead>
        <tr>
          <th>id</th>
          <th>userId</th>
          <th>title</th>
          <th>body</th>
        </tr>
      </thead>
      <tbody>
        {
          props.data.map(row => (
            <tr>
              <td>{row.id}</td>
              <td>{row.userId}</td>
              <td>{row.title}</td>
              <td>{row.body}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </div>
  )
}