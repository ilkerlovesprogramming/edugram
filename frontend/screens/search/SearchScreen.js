import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import { searchContent } from '../../api/search';
import LoadingState from '../../components/LoadingState';
import SearchResult from '../../components/SearchResult';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    
    setIsLoading(true);
    try {
      const response = await searchContent(query);
      setResults(response.data);
    } catch (error) {
      console.error('Search error:', error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={(text) => {
          setSearchQuery(text);
          handleSearch(text);
        }}
      />
      
      {isLoading ? (
        <LoadingState />
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <SearchResult result={item} />}
          contentContainerStyle={styles.resultsList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  resultsList: {
    flexGrow: 1,
  },
});

export default SearchScreen;