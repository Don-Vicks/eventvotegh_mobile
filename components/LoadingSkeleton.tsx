import React from 'react';
import { StyleSheet, View } from 'react-native';
import Skeleton from './ui/Skeleton';

export default function LoadingSkeleton() {
  return (
    <View style={styles.container}>
      {/* Banner / Hero */}
      <Skeleton height={200} style={styles.banner} />

      {/* Search Bar / Filters */}
      <View style={styles.row}>
        <Skeleton width="70%" height={40} />
        <Skeleton width="25%" height={40} />
      </View>

      {/* Grid of Content */}
      <View style={styles.grid}>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <View key={i} style={styles.card}>
            <Skeleton height={120} style={styles.cardImage} />
            <Skeleton width="80%" height={16} style={styles.cardText} />
            <Skeleton width="50%" height={12} style={styles.cardText} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  banner: {
    marginBottom: 24,
    borderRadius: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'space-between',
  },
  card: {
    width: '47%',
    marginBottom: 16,
  },
  cardImage: {
    marginBottom: 12,
    borderRadius: 12,
  },
  cardText: {
    marginBottom: 8,
  }
});
