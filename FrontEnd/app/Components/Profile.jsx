import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-details">
        <div className="profile-info">
          <p>
            <strong>Name:</strong> Sneha
          </p>
          <p>
            <strong>Email:</strong> sneha@gmail.com
          </p>
          <p>
            <strong>Role:</strong> User
          </p>
          <p>
            <strong>Joined:</strong> March 25, 2022
          </p>
        </div>
        <div className="profile-picture">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAACUCAMAAADifZgIAAAAllBMVEXw8PAAAAAAABeZm54ABh5lZmf8/Pvk5eb09PT39/f///8AECQAABna29wAABwAABUAAAkAFSgAAA4dHiDPz9HJysu0tbesra09PT29vLu/wMKDg4VhY2g7QUomLjkYGyeMjo8vMTtSVVppa3BFRkY2OkAqKzJJSk4FEBujpKQcIzAzNDcRESAMGSp3e4BZXGIOEhcmJid6vwZWAAAEtUlEQVR4nO2af3uiOBCACUQyYfiVVKAFXRG0au1K+/2/3EF7e7vXq4K4Jbm7vH/1qfF5XsNkJslgWQaDwWAwGAwGg8FgMBgMBoPBYDD8nwAA1QpX8ebLOv497sBZkhWL5benb8tFkSWM6+8NblAunkhsU0SkdkyeFmXgau7NoTjaPmIYk444RPTtYwGuarELAKSEINqr+6bMknmSlc39ykYkJNU3vIGVBAVZFynzXN7heSwt1kQgKZmm2sAWUlBZzOGX9df+PS9iKuRCV+0qEtFjavEP/+ZWfmw/qZQ49QB8G4u4sT5bd67VtJ+tNUyBvCCt9Bkx4ItYkOLjU1AOT/dCNmdj9y3m96lm2sAqn26C8yEAwYb61YUBKoADEc/ppVrips+COJMJDYKtaVRfLoBuHdE1m8hnEDwjgvQ8fgjaMZlOke0tQ7/y+gZVfrjsGzQlrJ3GvG8aed6O0ihEeErwe78P+45Eo+TnnWRUDxhXR/KkT4h4VUjKAeNKElYa7bS3SLL+AgIZwfsJbIYB1j2Sh/6A5Q+dtS7l0VhPCCwpOQyL6+0EOgPxmjAuB4wr47DRKPMV0l4MqDILWxb6WLe1Gv0B1r5WtdGy2h1Gr09b9wWZxGYgXmXTdV/V87ah3bsxnBJ4aKcxuTzZfN49EG3yXgdb+mFzMRWD1YR0qdFG1XpLxcI/XDw3HnwxZLMyJcBmNj5eiBGeHKk90+3WjOcrjKrgnDYPqghXvcedyeEOEXLHPvfirJKCONpJt4G7ICLazD+955tvIkEWGh0IfsJPUoSx87EPA5w5cShkreFMW11uKyQiqXLm/iUO3GV5QxBloc8W9e+AlRFbRP7MSSzPc13X86zEmfmR8Emmq3Q3s/MtoWiHj5uqcA5OUW0eQxsp2c41vLv+Cbjp7jmiiKEkhMgQkUbPu0xr5w7Xyk67kMSR7dtRTMLdKfu0f6AZwK0gP5R10zR1ecgDS/ce6Q+6Jth7Hx20jg0A1psk2l+iV6+0LSR72Xd/be3QOVPxleAGM4KkvLzoeNaOmQXarEw32ci2kJzd8L0DjPhCbhJNtHm6pyir3ofP2U6ir0n7jqeS4r4cULHBKvdIpQ7abh5jdw88JDsAHNqNVJwrDxI+P9JWemBahm5J0uNc8WxDsPPRvqIfx7MI/Z3qHu+JiP3hmqnjh70gpy/zGaZARFxcVfEAilhttxSsFwxXV5ZpgFWILwoPCV4texvR/6S7OpO1sgs/nr+I2Ll+0qCMxYu6u5Hap2PSQZt4qF8rChGeP6I/6maGO/7F67UvpYzpZtTNHbANDmrk/H4gWNOoHLeovCKiayWlBtL+N1nOfjdQdQPPT3L8SyreNpQnFYHN2+m6qpb/iusQjBVY82R8gPwZIgq2fu6B0G83fP8Jxz+p8Xh1JIe8f3OOOooUVHXviGRENf8BtIH9OL01vOItuavNm/g6+UkM2B3K/Abr9rj5OnlLDII7jJIbrBMb75RY0/kN1nOKd5PXdGM9HcZ6Ot6tOYyFK7PGnI0nR1XW1Ww8lSprQe3xUKHC2rq36W3YCt7+5IFzKz0tkS8B3FvRqo1nMBgMBoPBYDAYDAaDwWAwGAz/Wf4AqChSGmTAZdUAAAAASUVORK5CYII="
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
