<template>
  <div ref="editor"></div>
</template>

<script>
import Quill from 'quill';

import 'quill/dist/quill.snow.css';

export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  name: "TextArea",
  data() {
    return {
      editor: null
    };
  },
  mounted() {
    this.editor = new Quill(this.$refs.editor, {
      theme: 'snow',
    });

    this.editor.root.innerHTML = this.value;

    this.editor.on('text-change', () => this.update());
  },

  methods: {
    update() {
      this.$emit('input', this.editor.getText() ? this.editor.root.innerHTML : '');
    }
  }
}
</script>

<style scoped>
.ql-editor{min-height: 400px;}
</style>