/**
 * Implementation of a Graph data structure
 * 
 * Code adapted from 
 * http://blog.benoitvallon.com/data-structures-in-javascript/the-graph-data-structure/
 * 
 * @author Chester Carmer
 * @version 0.0.0
 */

export interface Vertex {
    nominal: number,
    edges: Edge[]
}

export interface Edge {
    terminal: Vertex,
    distance: number;
}

export class Graph {
    public vertices: Vertex[];

    constructor() {
        this.vertices = [];
    }

    /**
     * Returns the graphs vertices
     */
    getVerticies(): Vertex[] {
        return this.vertices;
    }

    /**
     * Returns the vertex instance in the graph
     * @param {number} vertex 
     * @return {Vertex}
     */
    getVertex(nominal: number): Vertex {
        return this.vertices.find(v => v.nominal === nominal);
    }

    /**
     * Adds a vertex with an empty array of edges to the graph
     * @param {number} nominal 
     * @return {void}
     */
    addVertex(nominal: number): void {
        this.vertices.push({
            nominal: nominal,
            edges: []
        });
    }

    /**
     * Creates an edge between two verticies
     * @param {number} nominal1 
     * @param {number} nominal2 
     * @param {number} distance 
     */
    addEdge(nominal1: number, nominal2: number, distance: number): void {
        let vertex1 =  this.vertices.find(v => v.nominal === nominal1);
        let vertex2 =  this.vertices.find(v => v.nominal === nominal2);
        vertex1.edges.push({
            terminal: vertex2,
            distance: distance
        });
        vertex2.edges.push({
            terminal: vertex1,
            distance: distance
        });
    }

    /**
     * Get full shortest path from previous vertices in vertex's shortest path
     * @param prev 
     * @param source 
     */
    deriveShortestPaths(prev: number[], source: number): number[][] {
        let getPrev = (path, v) => {
            let next = prev[v]
            if (next) {
                path.push(next);
                return getPrev(path, next);
            } else {
                path.push(source);
                path.reverse()
                return path;
            }
        }
        return prev.map((v, i) => getPrev([i], i) );
    }

}

  