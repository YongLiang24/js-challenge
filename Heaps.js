
/* Heaps is a type of tree.

Binary Heaps is similar to Binary Search Tree, but with different rules.
Each node can have most two child nodes. No order to the left or right,
as long as they are smaller or larger than the parent node.

MaxBinaryHeaps- parent nodes are always larger than child nodes.

MinBinaryHeaps- parent nodes are always smaller than child nodes.

Binary Heaps evens out the left and right and the tree is always compact
rather than one sided.

*/

/*Use array or list to present a heap tree

    special rules: 
    from a parent node, for any index in an array, the left child is placed in 2*index+1,
    the right child is placed in 2*index+2.

    to find the parent node from child nodes, use Math.floor((index -1)/2)

    much like stack/queue, heap can be implemented with array

*/
