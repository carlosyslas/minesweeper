import { fromJS, List } from "immutable";
import reducer from "./reducer";
import { uncoverCell, createNewBoard, flagCell, unflagCell } from "./actions";

describe("Board reducer", () => {
  it("returns the initial state by default", () => {
    const state = reducer(undefined);

    expect(state).toEqual(new List());
  });

  describe("uncover", () => {
    it("sets a cover state to false when uncover action was dispatched", () => {
      const initialState = fromJS([
        [
          { value: 1, covered: true },
          { value: 1, covered: true },
          { value: 1, covered: true }
        ],
        [
          { value: 1, covered: true },
          { value: 1, covered: true },
          { value: 1, covered: true }
        ],
        [
          { value: 1, covered: true },
          { value: 1, covered: true },
          { value: 1, covered: true }
        ]
      ]);
      const expectedState = fromJS([
        [
          { value: 1, covered: true },
          { value: 1, covered: true },
          { value: 1, covered: true }
        ],
        [
          { value: 1, covered: true },
          { value: 1, covered: false },
          { value: 1, covered: true }
        ],
        [
          { value: 1, covered: true },
          { value: 1, covered: true },
          { value: 1, covered: true }
        ]
      ]);

      const state = reducer(initialState, uncoverCell({ row: 1, col: 1 }));

      expect(state).toEqual(expectedState);
    });

    it("does not produce a new state if uncoverCell was triggered with wrong arguments", () => {
      const initialState = fromJS([
        [
          {
            value: 1,
            covered: true
          }
        ]
      ]);

      const state = reducer(initialState, uncoverCell({ row: -1, col: -1 }));

      expect(state).toEqual(initialState);
    });

    // TODO: test recursive uncover

    // TODO: test uncover removes flag

    // TODO: test uncover all mines on explosion
  });

  it("creates a new board with the given size and number of mines", () => {
    const state = reducer(
      undefined,
      createNewBoard({ width: 10, height: 10, mines: 10 })
    );

    expect(state.size).toEqual(10);
    expect(state.get(0).size).toEqual(10);
    expect(state.flatten().count(cell => cell.value === -1)).toEqual(10);
  });

  it("adds the counts of adjacent cells with mines", () => {
    const state = reducer(
      undefined,
      createNewBoard({ width: 2, height: 2, mines: 2 })
    );
    const sum = state.flatten().reduce((sum, cell) => sum + cell.value, 0);

    expect(sum).toEqual(2);
  });

  describe("flag", () => {
    it("sets the flagged state of a cell to true", () => {
      const initialState = fromJS([
        [{ value: 1, covered: true, flagged: false }]
      ]);

      const state = reducer(initialState, flagCell({ row: 0, col: 0 }));

      expect(state.getIn([0, 0, "flagged"])).toBe(true);
    });

    it("does not change the state if the provided cell position is out of the board's boundaries", () => {
      const initialState = fromJS([
        [{ value: 1, covered: true, flagged: false }]
      ]);

      const state = reducer(initialState, flagCell({ row: 1, col: 0 }));

      expect(state).toEqual(initialState);
    });

    it("can not flag an uncovered cell", () => {
      const initialState = fromJS([
        [{ value: 1, covered: false, flagged: false }]
      ]);

      const state = reducer(initialState, flagCell({ row: 0, col: 0 }));

      expect(state).toEqual(initialState);
    });
  });

  describe("unflag", () => {
    it("sets the flagged state of a cell to false", () => {
      const initialState = fromJS([
        [{ value: 1, covered: true, flagged: true }]
      ]);

      const state = reducer(initialState, unflagCell({ row: 0, col: 0 }));

      expect(state.getIn([0, 0, "flagged"])).toBe(false);
    });

    it("does not change the state if the provided cell position is out ouf the board's boundaries", () => {
      const initialState = fromJS([
        [{ value: 1, covered: true, flagged: true }]
      ]);

      const state = reducer(initialState, unflagCell({ row: 0, col: -1 }));

      expect(state).toEqual(initialState);
    });

    it("can not unflag an uncovered cell", () => {
      const initialState = fromJS([
        [{ value: 1, covered: false, flagged: true }]
      ]);

      const state = reducer(initialState, unflagCell({ row: 0, col: 0 }));

      expect(state).toBe(initialState);
    });
  });
});
