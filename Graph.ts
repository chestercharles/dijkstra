/**
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

    getVertex(vertex: string): Vertex {
        return this.vertices.find(v => v.vertex === vertex);
    }

    addVertex(vertex: string): void {
        this.vertices.push({
            vertex: vertex,
            edges: []
        });
    }

    addEdge(vertex1: string, vertex2: string, edgeLength: number): void {
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

  