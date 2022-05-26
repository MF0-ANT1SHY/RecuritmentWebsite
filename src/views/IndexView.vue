<template>
  <div class="box">
    <TitleCom>
      <div class="btn">招聘广场</div>
    </TitleCom>
    <div class="select-box">
      <div class="search-box">
        <input v-model="select.jobName" type="text" placeholder="实习生招聘" />
        <img src="../assets/search.png" alt="" />
      </div>
      <div class="list-box">
        <div v-for="i in selectKey" :key="i.key" class="list">
          <span class="label">{{ i.name }}:</span>
          <span>不限</span>
          <span
            v-for="(s, index) in options[getKey(i, i.key)]"
            :key="index"
          ></span>
        </div>
      </div>
    </div>
    <div class="jobs-list">
      <div v-for="i in jobs" :key="i.id">{{ i.jobName }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import TitleCom from "@/components/TitleCom.vue";
import { getJob, getRequirement } from "../http/job";
import { selectKeyOptionInt, Initdata, optionTypeInt } from "../types/index";

export default defineComponent({
  components: { TitleCom },
  setup() {
    const data = reactive(new Initdata());

    //生命周期
    onMounted(() => {
      getJob({}).then((res: any) => {
        data.jobs = res.data;
      });
      getRequirement().then((res: any) => {
        console.log(res);
        data.option = res.data;
      });
    });

    const selectKey: Array<selectKeyOptionInt> = [
      {
        key: "WorkingYears",
        name: "working experiences",
        inp: "education",
      },
      {
        key: "WelFares",
        name: "working bonus",
        inp: "payArea",
      },
      {
        key: "PayMonths",
        name: "working salary",
        inp: "payArea",
      },
    ];
    const getKey = (
      o: selectKeyOptionInt,
      k: keyof typeof o
    ): keyof typeof data.option => {
      return o[k] as any;
    };
    return {
      ...toRefs(data),
      selectKey,
      getKey,
    };
  },
});
</script>

<style lang="scss" scoped>
.btn {
  font-size: 16px;
  color: #2a9d8f;
  border: 1px solid #2a9d8f;
  cursor: pointer;
  padding: 5px;
}
.box {
  padding: 10px 30px;
  width: 1000px;
  margin: 0 auto;
  box-shadow: 0 6px 18px #999;
  .search-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #999;
    margin: 30px 10px;
    padding: 5px 20px;
    border-radius: 10px;
    input {
      border: none;
      outline: none;
      margin-right: 20px;
    }
    img {
      height: 20px;
    }
  }
}
</style>