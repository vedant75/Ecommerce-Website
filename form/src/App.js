import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section class="section-book">
      <div class="book">
        <div class="book__form">
          <form class="form">
            <div class="u-margin-bottom-medium">
              <h2 class="heading-secondary">Welcome Back!</h2>
            </div>

            <div class="form__group">
              <input
                type="email"
                class="form__input"
                placeholder="Email address"
                id="email"
                name="email"
                required
              />
              <label for="email" class="form__label">Email address</label>
            </div>

            <div class="form__group">
              <input
                type="password"
                class="form__input"
                placeholder="Password"
                id="password"
                name="password"
                required
              />
              <label for="name" class="form__label">Password</label>
            </div>
            <div class="form__group">
              <button class="btn btn--green" name="submit">
                Login &rarr;
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
}

export default App;
