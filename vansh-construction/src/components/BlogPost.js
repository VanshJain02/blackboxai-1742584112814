import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faUser, faTag } from '@fortawesome/free-solid-svg-icons';

const Post = styled.article`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.md};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const PostImage = styled.div`
  height: 300px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const PostContent = styled.div`
  padding: ${props => props.theme.spacing.xl};

  h2 {
    margin-bottom: ${props => props.theme.spacing.md};
    
    a {
      color: ${props => props.theme.colors.primary};
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: ${props => props.theme.colors.primaryDark};
      }
    }
  }

  p {
    color: ${props => props.theme.colors.darkGray};
    margin-bottom: ${props => props.theme.spacing.lg};
  }
`;

const PostMeta = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.darkGray};
  font-size: ${props => props.theme.fontSizes.sm};

  span {
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spacing.xs};
  }

  svg {
    color: ${props => props.theme.colors.primary};
  }
`;

const BlogPost = ({ post }) => {
  return (
    <Post>
      <PostImage>
        <img src={post.image} alt={post.title} />
      </PostImage>
      <PostContent>
        <PostMeta>
          <span>
            <FontAwesomeIcon icon={faCalendar} />
            {post.date}
          </span>
          <span>
            <FontAwesomeIcon icon={faUser} />
            {post.author}
          </span>
          <span>
            <FontAwesomeIcon icon={faTag} />
            {post.category}
          </span>
        </PostMeta>
        <h2><a href={`/blog/${post.id}`}>{post.title}</a></h2>
        <p>{post.excerpt}</p>
      </PostContent>
    </Post>
  );
};

export default BlogPost;