// Get Dom Element
const all_Matches = document.querySelector(".all-matches");
const lws_addMatch = document.querySelector(".lws-addMatch");
const lws_increment = document.querySelector(".lws-increment");
const lws_decrement = document.querySelector(".lws-decrement");
const lws_singleResult = document.querySelector(".lws-singleResult");
const lws_reset = document.querySelector(".lws-reset");

// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";
const ADD_MATCH = "add_match";

// action creators
const increment = (value) => {
   return {
      type: INCREMENT,
      payload: value,
   };
};
const decrement = (value) => {
   return {
      type: DECREMENT,
      payload: value,
   };
};
const reset = () => {
   return {
      type: RESET,
   };
};
// const addMatch = () => {
//    return {
//       type: ADD_MATCH,
//    };
// };

// Initial Statement
const initialStatement = {
   value: 0,
};

// create reducer
function matchReducer(state = initialStatement, actions) {
   if (actions.type === INCREMENT) {
      return {
         ...state,
         value: state.value + actions.payload,
      };
   } else if (actions.type === DECREMENT) {
      if (state.value < actions.payload) {
         return {
            ...state,
            value: 0,
         };
      } else {
         return {
            ...state,
            value: state.value - actions.payload,
         };
      }
   } else if (actions.type === RESET) {
      return {
         ...state,
         value: 0,
      };
   }
   // else if (actions.type === ADD_MATCH) {
   //    return {
   //       ...state,
   //    };
   // } 
   else {
      return state;
   }
}
// create store
const store = Redux.createStore(matchReducer);
const render = () => {
   const state = store.getState();
   lws_singleResult.innerText = state.value.toString();
};
render();

store.subscribe(render);

// listener here...
lws_increment.addEventListener("keydown", (event) => {
   if (event.key === "Enter") {
      event.preventDefault();
      const incrementValue = parseInt(lws_increment.value, 10);

      // action dispatch
      store.dispatch(increment(incrementValue));
   }
});
lws_decrement.addEventListener("keydown", (event) => {
   if (event.key === "Enter") {
      event.preventDefault();
      const decrementValue = parseInt(lws_decrement.value, 10);

      // action dispatch
      store.dispatch(decrement(decrementValue));
   }
});

lws_reset.addEventListener("click", () => {
   store.dispatch(reset());
});

// lws_addMatch.addEventListener("click", () => {
//    const div = document.createElement("div");
//    div.classList.add("match");

//    div.innerHTML = `
//       <div class="wrapper">
//          <button class="lws-delete">
//             <img src="./image/delete.svg" alt="" />
//          </button>
//          <h3 class="lws-matchName">Match 1</h3>
//       </div>
//       <div class="inc-dec">
//          <form class="incrementForm">
//             <h4>Increment</h4>
//             <input
//                type="number"
//                name="increment"
//                class="lws-increment"
//             />
//          </form>
//          <form class="decrementForm">
//             <h4>Decrement</h4>
//             <input
//                type="number"
//                name="decrement"
//                class="lws-decrement"
//             />
//          </form>
//       </div>
//       <div class="numbers">
//          <h2 class="lws-singleResult">120</h2>
//       </div>
//    `;

//    all_Matches.appendChild(div);

//    store.dispatch(addMatch());
// });
