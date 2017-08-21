/**
 * Dijkstra's Algorithmn
 * Finds shortest distance between nodes in a graph
*/

import { Vertex, Edge, Graph } from './Graph.js'

export function Dijkstra(graph: Graph, source: Vertex) {
    let Q: Vertex[] = [];

    let dist: number[] = [];
    let prev: number[] = [];
    let u: Vertex;
    let alt: number;

    for (let vertex of graph.vertices) {
        /**
         * Initialize distance between source and all nodes to Infinity,
         * and all shortest paths to undefined
         */
        dist[vertex.nominal] = Infinity;
        prev[vertex.nominal] = undefined;
        Q.push(vertex);
    }
    /**
     * Path to source from source is zero
     */
    dist[source.nominal] = 0;

    while (Q.length > 0) {
        /**
         * Get the vertext with the shortest distance to
         * the source that has not yet been visited
         */
        u = Q.reduce((min, next): Vertex => {
            if (dist[next.nominal] < dist[min.nominal]) {
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
            alt = dist[u.nominal] + u.edges.find(e => e.terminal === v).distance;

            if (alt < dist[v.nominal]) {
                /**
                 * If the current source->v distance is further than
                 * the source->u + u->v distance, then set the new 
                 * source->v distance to source->u + u->v
                 */
                dist[v.nominal] = alt;

                prev[v.nominal] = u.nominal;
            }
        }
    }

    return {
        dist: dist,
        prev: prev
    }

}