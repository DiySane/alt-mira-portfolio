<nav class="navbar">
  <div class="logo">LOGO</div>

  <ul>
    <li><a href="#about">ABOUT</a></li>
    <li><a href="#services">SERVICES</a></li>
    <li><a href="#works">WORKS</a></li>
  </ul>
</nav>

<style>
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: white;
    display: flex;
    justify-content: space-between;
    padding: 25px 80px;
    border-bottom: 1px solid var(--border);
  }

  a {
    color: var(--text);
    text-decoration: none;
  }

  a:hover {
    color: var(--primary);
  }
</style>