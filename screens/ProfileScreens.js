import {
    View,
    Text,
    StyleSheet,
    Pressable,
    useWindowDimensions,
  } from 'react-native';
  import { useState } from 'react';
  import { Ionicons } from '@expo/vector-icons';
  import { COLORS, SPACING, RADII, FONTS } from '../theme';
  
  export default function ProfileScreen() {
    const [theme, setTheme] = useState('light');
    const [isFollowing, setIsFollowing] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [liked, setLiked] = useState(false);
    const currentTheme = COLORS[theme];
  
    // 📱 Responsive logic
    const { width } = useWindowDimensions();
    const isLargeScreen = width > 500;
  
    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
  
    const toggleFollow = () => {
      setIsFollowing((prev) => !prev);
    };
  
    const toggleExpanded = () => {
      setExpanded((prev) => !prev);
    };
  
    return (
      <View style={[styles.container, { backgroundColor: currentTheme.bg }]}>
        {/* Theme Toggle Button */}
        <Pressable onPress={toggleTheme} style={styles.themeToggle}>
          <Ionicons
            name={theme === 'light' ? 'moon' : 'sunny'}
            size={28}
            color={currentTheme.text}
          />
        </Pressable>
  
        {/* Profile Card (tap to expand) */}
        <Pressable
          onPress={toggleExpanded}
          style={[
            styles.card,
            {
              backgroundColor: currentTheme.card,
              padding: isLargeScreen ? SPACING.xl : SPACING.lg,
              width: isLargeScreen ? '60%' : '85%',
            },
          ]}
        >
          <Ionicons
            name="person-circle-outline"
            size={isLargeScreen ? 100 : 80}
            color={currentTheme.text}
          />
  
          <Text style={[styles.name, { color: currentTheme.text }]}>
            John Doe
          </Text>
  
          <Text style={[styles.role, { color: currentTheme.text }]}>
            Mobile Developer
          </Text>
  
          {/* Button Row: Like + Follow */}
          <View style={styles.buttonRow}>
            {/* Like Button */}
            <Pressable
                onPress={() => setLiked(!liked)}
                style={({ pressed }) => [
                    styles.likeButton,
                    {
                    backgroundColor: pressed
                        ? '#e63946'
                        : liked
                        ? '#d00000'
                        : '#ff6b6b',
                    },
                ]}
                >
                <Ionicons
                    name={liked ? "heart" : "heart-outline"}
                    size={24}
                    color="#fff"
                />
                <Text style={styles.likeText}>
                    {liked ? "Liked" : "Like"}
                </Text>
                </Pressable>
  
            {/* Follow Button */}
            <Pressable
              onPress={toggleFollow}
              style={({ pressed }) => [
                styles.followButton,
                isFollowing && styles.followButtonActive,
                pressed && styles.followButtonPressed,
              ]}
            >
              <Ionicons
                name={isFollowing ? 'checkmark' : 'person-add'}
                size={20}
                color={isFollowing ? '#fff' : '#1d4ed8'}
              />
              <Text
                style={[
                  styles.followText,
                  isFollowing && styles.followTextActive,
                ]}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </Text>
            </Pressable>
          </View>
  
          {/* Expanded Content */}
          {expanded && (
            <View style={styles.extraInfo}>
              <View style={styles.infoRow}>
                <Ionicons
                  name="location-outline"
                  size={18}
                  color={currentTheme.text}
                />
                <Text style={[styles.infoText, { color: currentTheme.text }]}>
                  Istanbul, Turkey
                </Text>
              </View>
  
              <View style={styles.infoRow}>
                <Ionicons
                  name="information-circle-outline"
                  size={18}
                  color={currentTheme.text}
                />
                <Text style={[styles.infoText, { color: currentTheme.text }]}>
                  Passionate mobile developer who loves React Native, clean UI and
                  learning new technologies.
                </Text>
              </View>
            </View>
          )}
  
          {/* Küçük ipucu yazısı */}
          <Text style={[styles.expandHint, { color: currentTheme.text }]}>
            {expanded ? 'Tap card to hide details' : 'Tap card to see more'}
          </Text>
        </Pressable>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    themeToggle: {
      position: 'absolute',
      top: 50,
      right: 20,
      padding: SPACING.sm,
    },
  
    // padding ve width yukarıda dinamik
    card: {
      borderRadius: RADII.md,
      alignItems: 'center',
  
      // iOS shadow
      shadowColor: '#000',
      shadowOpacity: 0.15,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 4 },
  
      // Android shadow
      elevation: 6,
    },
  
    name: {
      fontFamily: FONTS.bold,
      fontSize: 24,
      marginTop: SPACING.md,
    },
  
    role: {
      fontFamily: FONTS.regular,
      fontSize: 16,
      marginTop: SPACING.sm,
      opacity: 0.7,
    },
  
    buttonRow: {
      flexDirection: 'row',
      marginTop: SPACING.md,
    },
  
    likeButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: SPACING.sm,
      paddingHorizontal: SPACING.lg,
      borderRadius: 50,
      marginRight: SPACING.sm,
    },
  
    likeText: {
      color: '#fff',
      fontFamily: FONTS.bold,
      fontSize: 16,
      marginLeft: SPACING.sm,
    },
  
    followButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: SPACING.sm,
      paddingHorizontal: SPACING.lg,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: '#1d4ed8',
      backgroundColor: '#fff',
    },
  
    followButtonActive: {
      backgroundColor: '#1d4ed8',
    },
  
    followButtonPressed: {
      opacity: 0.8,
    },
  
    followText: {
      fontFamily: FONTS.bold,
      fontSize: 16,
      marginLeft: SPACING.sm,
      color: '#1d4ed8',
    },
  
    followTextActive: {
      color: '#fff',
    },
  
    extraInfo: {
      marginTop: SPACING.lg,
      alignSelf: 'stretch',
    },
  
    infoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: SPACING.sm,
    },
  
    infoText: {
      fontFamily: FONTS.regular,
      fontSize: 14,
      marginLeft: SPACING.sm,
      flexShrink: 1,
    },
  
    expandHint: {
      marginTop: SPACING.md,
      fontSize: 12,
      opacity: 0.6,
      fontFamily: FONTS.regular,
    },
  });
  