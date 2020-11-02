import React from 'react';
import PostListItem from '../Post-list-item/Post-list-item';
import { ListGroup } from 'reactstrap';
import './Post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

  const elements = posts.map(item => {
    const {id, ...itemProps} = item;
    return (
      <li key={id} className='list-group-item'>
        <PostListItem
          label={itemProps.label}
          important={itemProps.important}
          like={itemProps.like}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)}/>
      </li>
    )
  })

  return (
    <ListGroup className="app-list">
      {elements}
    </ListGroup>
  )
}

export default PostList;