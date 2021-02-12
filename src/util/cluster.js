//@flow

/**
 * @private
 */
const endpoint = {
  http: {
    devnet: 'http://localhost',
    testnet: 'http://localhost',
    'mainnet-beta': 'localhost',
  },
  https: {
    devnet: 'localhost',
    testnet: 'localhost',
    'mainnet-beta': 'localhost',
  },
};

export type Cluster = 'devnet' | 'testnet' | 'mainnet-beta';

/**
 * Retrieves the RPC API URL for the specified cluster
 */
export function clusterApiUrl(cluster?: Cluster, tls?: boolean): string {
  const key = tls === false ? 'http' : 'https';

  if (!cluster) {
    return endpoint[key]['devnet'];
  }

  const url = endpoint[key][cluster];
  if (!url) {
    throw new Error(`Unknown ${key} cluster: ${cluster}`);
  }
  return url;
}
