<template>
  <b-card>
    <b-card-header>
      <h2>Chart of Accounts</h2>
      <b-button variant="primary" @click="newAccountModal = true">
        Add a New Account
      </b-button>
    </b-card-header>

    <b-card-body>
      <b-tabs>
        <b-tab title="Assets">
          <template #title>
            Assets
            <b-badge variant="light-dark" class="ml-2"> 10 </b-badge>
          </template>

          <table
            v-for="accountType in allAccounts['Assets']"
            :key="accountType.type"
            class="form-table"
          >
            <thead>
              <tr>
                <th colspan="4">{{ accountType.type }}</th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="account in accountType.accounts"
                :key="account.accountName"
              >
                <td>{{ account.id }}</td>
                <td>
                  {{ account.accountName }} <br />
                  <small>
                    {{ account.lastTransaction }}
                  </small>
                </td>
                <td>{{ account.description }}</td>
                <td>
                  <b-button
                    variant="flat-success"
                    class="btn-icon"
                    @click="handleEdit(account)"
                  >
                    <feather-icon icon="EditIcon" />
                  </b-button>
                </td>
              </tr>

              <tr>
                <td></td>
                <td colspan="3">
                  <b-button
                    variant="flat-primary"
                    @click="newAccountModal = true"
                  >
                    <feather-icon icon="PlusIcon" />
                    Add a new account
                  </b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </b-tab>
        <b-tab>
          <template #title>
            Liabilities & Credit Cards
            <b-badge variant="light-dark" class="ml-2"> 5 </b-badge>
          </template>
          <table
            v-for="accountType in allAccounts['Liabilities & Credit Cards']"
            :key="accountType.type"
            class="form-table"
          >
            <thead>
              <tr>
                <th colspan="4">
                  {{ accountType.type }}
                  <b-badge variant="light-dark" class="ml-2"> 10 </b-badge>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="account in accountType.accounts"
                :key="account.accountName"
              >
                <td>{{ account.id }}</td>
                <td>
                  {{ account.accountName }} <br />
                  <small>
                    {{ account.lastTransaction }}
                  </small>
                </td>
                <td>{{ account.description }}</td>
                <td>
                  <b-button
                    variant="flat-success"
                    class="btn-icon"
                    @click="handleEdit(account)"
                  >
                    <feather-icon icon="EditIcon" />
                  </b-button>
                </td>
              </tr>

              <tr>
                <td></td>
                <td colspan="3">
                  <b-button
                    variant="flat-primary"
                    @click="newAccountModal = true"
                  >
                    <feather-icon icon="PlusIcon" />
                    Add a new account
                  </b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </b-tab>

        <b-tab title="Income"> </b-tab>
      </b-tabs>
    </b-card-body>

    <!-- new account modal -->
    <b-modal
      title="Add an Account"
      ok-title="Save"
      cancel-title="Cancel"
      v-model="newAccountModal"
      @ok="addNewAccount"
    >
      <b-card-text>
        <b-row>
          <b-col md="5" class="text-right">
            <label>Account Type <span class="text-danger">*</span></label>
          </b-col>

          <b-col md="7">
            <b-form-select
              v-model="newAccount.accountType"
              :options="accountTypes"
            ></b-form-select>
          </b-col>
        </b-row>

        <b-row class="mt-1">
          <b-col md="5" class="text-right">
            <label>Account Name <span class="text-danger">*</span> </label>
          </b-col>

          <b-col md="7">
            <b-form-input v-model="newAccount.accountName"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-1">
          <b-col md="5" class="text-right">
            <label>Account ID</label>
          </b-col>

          <b-col md="7">
            <b-form-input v-model="newAccount.id"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-1">
          <b-col md="5" class="text-right">
            <label>Description</label>
          </b-col>

          <b-col md="7">
            <b-form-textarea v-model="newAccount.description"></b-form-textarea>
          </b-col>
        </b-row>
      </b-card-text>
    </b-modal>

    <!-- edit account modal -->
    <b-modal
      :title="selectedAccount.accountname"
      ok-title="Save"
      cancel-title="Cancel"
      v-model="editModal"
    >
      <b-card-text>
        <b-row>
          <b-col md="5" class="text-right">
            <label>Account Type <span class="text-danger">*</span></label>
          </b-col>

          <b-col md="7">
            <b-form-select
              v-model="selectedAccount.accountType"
              :options="accountTypes"
            ></b-form-select>
          </b-col>
        </b-row>

        <b-row class="mt-1">
          <b-col md="5" class="text-right">
            <label>Account Name <span class="text-danger">*</span> </label>
          </b-col>

          <b-col md="7">
            <b-form-input v-model="selectedAccount.accountName"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-1">
          <b-col md="5" class="text-right">
            <label>Account ID</label>
          </b-col>

          <b-col md="7">
            <b-form-input v-model="selectedAccount.id"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-1">
          <b-col md="5" class="text-right">
            <label>Description</label>
          </b-col>

          <b-col md="7">
            <b-form-textarea
              v-model="selectedAccount.description"
            ></b-form-textarea>
          </b-col>
        </b-row>
      </b-card-text>
    </b-modal>
  </b-card>
</template>

<script>
import { accountTypes, allAccounts } from "./data";
import BCardCode from "@core/components/b-card-code";
import {
  BTabs,
  BTab,
  BCardText,
  BBadge,
  BCard,
  BCardHeader,
  BCardBody,
  BButton,
  BModal,
  BFormSelect,
  BFormInput,
  BFormTextarea,
  BRow,
  BCol
} from "bootstrap-vue";

export default {
  components: {
    BCardCode,
    BTabs,
    BCardText,
    BTab,
    BBadge,
    BCard,
    BCardHeader,
    BCardBody,
    BButton,
    BModal,
    BFormInput,
    BFormSelect,
    BFormTextarea,
    BRow,
    BCol
  },
  data() {
    return {
      newAccount: {
        accountType: "",
        accountName: "",
        id: "",
        description: ""
      },
      newAccountModal: false,
      editModal: false,
      accountTypes,
      allAccounts,
      selectedAccount: {}
    };
  },

  methods: {
    addNewAccount() {
      console.log(this.newAccount);
    },
    handleEdit(account) {
      this.selectedAccount = account;
      this.editModal = true;
    }
  }
};
</script>

<style scoped>
.form-table {
  width: 100%;
}

.form-table th {
  background-color: #e0e7eb;
  border-bottom: 1px solid #d4dde3;
  padding: 8px;
}

.form-table td {
  border-bottom: 1px solid #d4dde3;
  padding: 8px;
}
</style>
