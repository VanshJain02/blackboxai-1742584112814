import React, { useState } from 'react';
import styled from 'styled-components';
import BlogSearch from '../components/BlogSearch';
import BlogPost from '../components/BlogPost';
import BlogSidebar from '../components/BlogSidebar';

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xl};
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div``;

const NoResults = styled.div`
  text-align: center;
  padding: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.darkGray};
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius.lg};
  box-shadow: ${props => props.theme.shadows.md};
`;

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts] = useState([
    {
      id: 1,
      title: "The Future of Sustainable Construction in India",
      excerpt: "Explore how sustainable construction practices are shaping the future of real estate in India. From green buildings to eco-friendly materials, learn about the latest innovations in sustainable construction.",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      date: "March 5, 2024",
      author: "John Doe",
      category: "Sustainability"
    },
    {
      id: 2,
      title: "Smart Home Technology Trends in 2024",
      excerpt: "Discover the latest smart home technologies being integrated into modern residential projects.",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
      date: "March 3, 2024",
      author: "Jane Smith",
      category: "Technology"
    },
    {
      id: 3,
      title: "Real Estate Investment Guide for 2024",
      excerpt: "A comprehensive guide to investing in real estate in 2024, including market trends and opportunities.",
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
      date: "March 1, 2024",
      author: "Mike Johnson",
      category: "Investment"
    }
  ]);

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredPosts = searchTerm
    ? posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.category.toLowerCase().includes(searchTerm) ||
        post.author.toLowerCase().includes(searchTerm)
      )
    : posts;

  return (
    <BlogContainer>
      <BlogSearch onSearch={handleSearch} />
      
      <BlogGrid>
        <MainContent>
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <BlogPost key={post.id} post={post} />
            ))
          ) : (
            <NoResults>
              <h3>No posts found</h3>
              <p>Try adjusting your search terms or browse our recent posts.</p>
            </NoResults>
          )}
        </MainContent>

        <BlogSidebar />
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog;