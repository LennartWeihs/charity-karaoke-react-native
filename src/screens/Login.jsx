import React, { useEffect, useState } from "react";
import { View } from "react-native";
import t from "tcomb-form-native";
import { showMessage } from "react-native-flash-message";
import Loading from "./Loading";
import BaseView from "./BaseView";
import TitledCard from "../components/TitledCard";
import { postCharityKaraokeAuth } from "../charity-karaoke-api/auth";
import { getKaraokeEvents } from "../charity-karaoke-api/karaokeInfo";
import AppButton from "../components/AppButton";

const Form = t.form.Form;

export default function Login({ navigation }) {
  const [events, setEvents] = useState([]);
  const [formValues, setFormValues] = useState();
  const [authIsLoading, setAuthIsLoading] = useState(false);

  useEffect(() => {
    getKaraokeEvents().then((res) => {
      if (res) {
        setEvents(res);
      }
    });
  }, []);

  if (!events.length) {
    return <Loading />;
  }

  // create data for login form
  const eventNamesByID = {};
  events.forEach(({ id, name }) => {
    eventNamesByID[id] = name;
  });
  const Events = t.enums(eventNamesByID, "Events");
  const LoginModel = t.struct({
    username: t.String,
    password: t.String,
    event: Events,
  });
  const loginFormOptions = {
    fields: {
      username: {
        label: "Username",
        placeholder: "Username",
      },
      password: {
        label: "Password",
        placeholder: "Password",
      },
      event: {
        label: "Veranstaltung",
        nullOption: false,
      },
    },
  };
  const smallestId = Math.min
    .apply(
      Math,
      Object.keys(eventNamesByID).map((id) => parseInt(id))
    )
    .toString();
  const loginFormInitialValues = { event: smallestId };
  // form submit handling
  function handleSubmit() {
    setAuthIsLoading(true);

    const submittedValues = formValues.getValue();
    if (!submittedValues) {
      setAuthIsLoading(false);
      return;
    }

    postCharityKaraokeAuth(submittedValues).then((res) => {
      if (res) {
        navigation.navigate("Songs", {
          token: res.accessToken,
          karaokeId: submittedValues.event,
        });
      } else {
        showMessage({
          message: "Fehler!",
          description: "Nutzer existiert nicht!",
          type: "danger",
          icon: "auto",
        });
      }
      setAuthIsLoading(false);
    });
  }

  return (
    <BaseView>
      <TitledCard title="Login">
        <Form
          ref={(c) => setFormValues(c)}
          type={LoginModel}
          options={loginFormOptions}
          value={loginFormInitialValues}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <AppButton
            styles={{ marginTop: 30 }}
            onPress={handleSubmit}
            isLoading={authIsLoading}
          >
            LOG IN
          </AppButton>
        </View>
      </TitledCard>
    </BaseView>
  );
}
