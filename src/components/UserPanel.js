import React from 'react'

export const UserPanel = ({user}) => (
  <div>
    <div>
      <h3>
        <i className="glyphicon glyphicon-user"></i> Welcom, {user.name}
      </h3>
    </div>
  </div>
)