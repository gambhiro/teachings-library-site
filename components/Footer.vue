<template>
  <div id="page-footer" class="footer">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h4>disclaimer</h4>
          <p>
            Views expressed or supplied by or through forestsangha.org
            (“<em>fs</em>”) are those of the respective authors.
          </p>
        </div>

        <div class="column borders">
          <h4>subscribe / feeds</h4>
        </div>

        <div class="column">
          <h4>copyright</h4>
          <p>
            This work is licensed under a
            <a
              href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
              target="_blank"
              >Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
              International License</a
            >.
          </p>
          <p>Copyright © 2020 Forest Sangha</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
#page-footer
  background-color: $footer-background
  color: $footer-color
  border-top: $footer-border 4px solid
  text-align: center
  h4
    font-size: 1.2rem
    margin-bottom: 1.5rem
  .column.borders
    border-left: $footer-color 1px solid
    border-right: $footer-color 1px solid
  a
    color: $footer-link
    font-weight: bold
    &:hover
      color: $footer-link-hover
</style>
