<script>
export default {
  name: "ProjectCard",
  props:['project'],
}
</script>

<template>
  <div class="card">

    <div class="card-body">
      <h1>{{ project.name }}</h1>
      <div class="projectClient">{{ project.clientID }}</div>
      <article v-html="project.description"></article>
      <div class="dates">
        <div class="start date">
          Start <span>{{ project.startDate }}</span>
        </div>
        <div class="end date">
          End <span>{{ project.endDate }}</span>
        </div>

      </div>
    </div>
    <div :class="['card-footer', `bg-${project.status}`]">
      Status : {{ project.status }}
    </div>
  </div>
</template>


<style scoped lang="scss">
  .card{
    width: 100%;
    display: flex;
    flex-direction: column;

  }

  h1{
    font-size: 1.4rem;
  }

  article{
    font-size:0.9rem;
  }

  .card-footer{
    background-color: #1bc5bd;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 500;
    text-transform: capitalize;
    &.bg-active{
      background-color: #1bc5bd;
    }
    &.bg-finished{
      background-color: #f64e60;
    }
    &.bg-pending{
      background-color: #ffa800;
    }
  }

  .projectClient{
    font-size: 0.9rem;
    padding: 0 0 16px 0;
    font-weight: 500;
    color: #3f4254;
  }

  .dates{
    display: flex;
    margin-top: 32px;
    align-items: center;
    justify-content: space-around;
  }

  .date{
    font-size:12px;
    & span{
      font-size:11px;
      padding: 6px 10px;
    }

    &.start span{
      background: #c9f7f5;
      color: #1bc5bd;
    }

    &.end span{
      color: #f64e60;
      background-color: #ffe2e5;
    }


  }
</style>
