/**
 * Dijkstra's Algorithmn
 * Finds shortest distance between nodes in a graph
*/

import { Vertex, Edge, Graph } from './Graph.js'

export function Dijkstra(graph: Graph, source: Vertex) {
    let Q: Vertex[] = [];

    let dist: any = {};
    let prev: any = {};
    let u: Vertex;
    let alt: number;

    for (let node of graph.vertices) {
        /**
         * Initialize distance between source and all nodes to Infinity,
         * and all shortest paths to undefined
         */
        dist[node.vertex] = Infinity;
        prev[node.vertex] = undefined;
        Q.push(node);
    }
    /**
     * Path to source from source is zero
     */
    dist[source.vertex] = 0;

    while (Q.length > 0) {
        /**
         * Get the vertext with the shortest distance to
         * the source that has not yet been visited
         */
        u = Q.reduce((min, next): Vertex => {
            if (dist[next.vertex] < dist[min.vertex]) {
                min = next;
            }
            return min;
        });
        Q = Q.filter(v => v !== u);

        /**
         * Get neighbors of u that are still unvisited
         */
        let neighbors: Vertex[] = u.edges.map(e => e.terminal).filter(t => ~Q.indexOf(t));

        for (let v of neighbors) {
            /**
             * Add the source->u distance to the u->v distance
             */
            alt = dist[u.vertex] + u.edges.find(e => e.terminal === v).edgeLength;

            if (alt < dist[v.vertex]) {
                /**
                 * If the current source->v distance is further than
                 * the source->u + u->v distance, then set the new 
                 * source->v distance to source->u + u->v
                 */
                dist[v.vertex] = alt;

                prev[v.vertex] = u.vertex;
            }
        }
    }

    return {
        dist: dist,
        prev: prev
    }

}