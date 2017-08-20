/**
 * Code adapted from 
 * http://blog.benoitvallon.com/data-structures-in-javascript/the-graph-data-structure/
 */

export interface Vertex {
    vertex: string,
    edges: Edge[]
}

export interface Edge {
    terminal: Vertex,
    edgeLength: number;
}

export class Graph {
    public vertices: Vertex[];

    constructor() {
        this.vertices = [];
    }

    /**
     * Returns the vertex instance in the graph
     * @param {string} vertex 
     * @return {Vertex}
     */
    getVertex(vertex: string): Vertex {
        return this.vertices.find(v => v.vertex === vertex);
    }

    /**
     * Adds a vertex with an empty array of edges to the graph
     * @param {string} vertex 
     * @return {void}
     */
    addVertex(vertex: string): void {
        this.vertices.push({
            vertex: vertex,
            edges: []
        });
    }

    /**
     * Creates an edge between two verticies
     * @param {string} vertex1 
     * @param {string} vertex2 
     * @param {number} edgeLength 
     */
    addEdge(vertex1: string, vertex2: string, edgeLength: number): void {
        /**
         * 
         */
        let _vertex1 =  this.vertices.find(v => v.vertex === vertex1);
        let _vertex2 =  this.vertices.find(v => v.vertex === vertex2);
        _vertex1.edges.push({
            terminal: _vertex2,
            edgeLength: edgeLength
        });
        _vertex2.edges.push({
            terminal: _vertex1,
            edgeLength: edgeLength
        });
    }

}

  