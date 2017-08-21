import { Vertex, Edge, Graph } from './Graph';
import { Dijkstra } from './Dijkstra';
import { expect } from 'chai';

/**
 * Initialization 
 * 
 * Creating graph found here: 
 * http://www.geeksforgeeks.org/printing-paths-dijkstras-shortest-path-algorithm/
 * 
 */

const graph = new Graph();
const vertices = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const edges: number[][] = [
    [0, 1, 4],
    [0, 7, 8],
    [1, 7, 11],
    [1, 2, 8],
    [2, 3, 7],
    [2, 5, 4],
    [2, 8, 2],
    [3, 4, 9],
    [3, 5, 14],
    [4, 5, 10],
    [5, 6, 2],
    [6, 7, 1],
    [6, 8, 6],
    [7, 8, 7],
];

vertices.forEach( v => graph.addVertex(v) );
edges.forEach( e => { 
    (<any>graph.addEdge)(...e);
});

/**
 * Run tests
 */
describe("Dijkstra's algorithm", () => {

    const source = graph.getVertex(0);
    const result = Dijkstra(graph, source);

    it('should output the shortest distance from the source to a given vertex', () => {
        const dist = [0, 4, 12, 19, 21, 11, 9, 8, 14];
        expect(result.dist).to.deep.equal(dist);
    });

    it("should output the previous vertex in the shortest path for each vertex", () => {
        const prev = [undefined, 0, 1, 2, 5, 6, 7, 0, 2];
        expect(result.prev).to.deep.equal(prev);
    });

    it('should output the shortest distance from the source to a given vertex', () => {
        const path = [
            [0, 0], 
            [0, 1], 
            [0, 1, 2], 
            [0, 1, 2, 3], 
            [0, 7, 6, 5, 4], 
            [0, 7, 6, 5], 
            [0, 7, 6], 
            [0, 7], 
            [0, 1, 2, 8]
        ]

        expect( graph.deriveShortestPaths(result.prev, 0) ).to.deep.equal(path);
    });
});
