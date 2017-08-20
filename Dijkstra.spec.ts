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


interface EdgeSpec {
    s: string,
    t: string,
    l: number,
}

const graph = new Graph();
const vertices = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];
const edges: EdgeSpec[] = [
    {s: '0', t:'1', l: 4 },
    {s: '0', t:'7', l: 8 },
    {s: '1', t:'7', l: 11 },
    {s: '1', t:'2', l: 8 },
    {s: '2', t:'3', l: 7 },
    {s: '2', t:'5', l: 4 },
    {s: '2', t:'8', l: 2 },
    {s: '3', t:'4', l: 9 },
    {s: '3', t:'5', l: 14 },
    {s: '4', t:'5', l: 10 },
    {s: '5', t:'6', l: 2 },
    {s: '6', t:'7', l: 1 },
    {s: '6', t:'8', l: 6 },
    {s: '7', t:'8', l: 7 },
];

vertices.forEach( v => graph.addVertex(v) );
edges.forEach( e => { 
    graph.addEdge(e.s, e.t, e.l);
});


describe("Dijkstra's algorithm", () => {

    const source = graph.getVertex('0');
    const result = Dijkstra(graph, source);

  it('should output the shortest distance from the source to a given vertex', () => {
    const correctDistances = { 
        '0': 0,
        '1': 4,
        '2': 12,
        '3': 19,
        '4': 21,
        '5': 11,
        '6': 9,
        '7': 8,
        '8': 14 
    };
    expect(result.dist).to.deep.equal(correctDistances);
  });

  it("should output the previous vertex in the shortest path for each vertex", () => {
    const shortestPaths = { 
        '0': undefined,
        '1': '0',
        '2': '1',
        '3': '2',
        '4': '5',
        '5': '6',
        '6': '7',
        '7': '0',
        '8': '2'
    };
    expect(result.prev).to.deep.equal(shortestPaths);
  });
});


/*
'0': [0],
        '1': [0, 1],
        '2': [0, 1, 2],
        '3': [0, 1, 2, 3],
        '4': [0, 7, 6, 5, 4],
        '5': [0, 7, 6, 5],
        '6': [0, 7, 6],
        '7': [0, 7],
        '8': [0, 1, 2, 8] 
        */