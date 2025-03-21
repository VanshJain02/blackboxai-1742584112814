import React from 'react';
import styled from 'styled-components';

const Sidebar = styled.aside``;

const SidebarSection = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.md};
  margin-bottom: ${props => props.theme.spacing.xl};

  h3 {
    margin-bottom: ${props => props.theme.spacing.lg};
    color: ${props => props.theme.colors.primary};
  }
`;

const PopularPost = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.md};

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: ${props => props.theme.borderRadius.sm};
  }

  h4 {
    margin-bottom: ${props => props.theme.spacing.xs};
    
    a {
      color: ${props => props.theme.colors.darkGray};
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: ${props => props.theme.colors.primary};
      }
    }
  }

  .date {
    font-size: ${props => props.theme.fontSizes.sm};
    color: ${props => props.theme.colors.darkGray};
  }
`;

const BlogSidebar = () => {
  const popularPosts = [
    {
      id: 1,
      title: "Understanding RERA Guidelines",
      date: "March 1, 2024",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
    },
    {
      id: 2,
      title: "Essential Home Buying Tips",
      date: "February 25, 2024",
      image: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
    },
    {
      id: 3,
      title: "Property Maintenance Guide",
      date: "February 20, 2024",
      image: "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg"
    }
  ];

  return (
    <Sidebar>
      <SidebarSection>
        <h3>Popular Posts</h3>
        {popularPosts.map(post => (
          <PopularPost key={post.id}>
            <img src={post.image} alt={post.title} />
            <div>
              <h4><a href={`/blog/${post.id}`}>{post.title}</a></h4>
              <span className="date">{post.date}</span>
            </div>
          </PopularPost>
        ))}
      </SidebarSection>
    </Sidebar>
  );
};

export default BlogSidebar;