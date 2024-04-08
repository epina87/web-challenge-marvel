import React from 'react';
import { render, screen } from '@testing-library/react';
import ComicItem from '../ComicItem';

describe('ComicItem component', () => {
  test('renders comic details when provided with URL', async () => {
    const mockComicDetails = {
      results: [
        {
          title: 'Mock Comic',
          thumbnail: {
            path: 'path/to/image',
            extension: 'jpg',
          },
          dates: [{ date: '2022-04-06T00:00:00-0700' }],
        },
      ],
    };

    // Simulate a successful fetchComicDetails function
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockComicDetails),
    });

    render(<ComicItem url="url/to/comic" />);

    // Expect the comic title to be displayed after fetching comic details
    expect(await screen.findByText('Mock Comic')).toBeInTheDocument();

    // Expect the comic image to be displayed after fetching comic details
    expect(await screen.findByAltText('Mock Comic')).toBeInTheDocument();
  });

  test('renders loading message when waiting for comic details', async () => {
    // Simulate an unsuccessful fetchComicDetails function
    jest.spyOn(global, 'fetch').mockRejectedValueOnce(new Error('Failed to fetch'));

    render(<ComicItem url="url/to/comic" />);

    // Expect the loading message to be displayed while waiting for comic details
    expect(await screen.findByText('Loading comic details...')).toBeInTheDocument();
  });
});
