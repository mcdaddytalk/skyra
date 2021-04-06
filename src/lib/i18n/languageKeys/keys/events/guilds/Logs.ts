import { Difference, FT, T, Value, Values } from '#lib/types';
import type { DefaultMessageNotifications, ExplicitContentFilterLevel, VerificationLevel } from 'discord.js';

type Notifications = DefaultMessageNotifications | number;

export const ChannelCreate = T('events/guilds-logs:channelCreate');
export const ChannelCreateParent = FT<Value>('events/guilds-logs:channelCreateParent');
export const ChannelCreatePosition = FT<Value<number>>('events/guilds-logs:channelCreatePosition');
export const ChannelCreatePermissionsTitle = FT<Value>('events/guilds-logs:channelCreatePermissionsTitle');
export const ChannelCreatePermissionsAllow = FT<Values>('events/guilds-logs:channelCreatePermissionsAllow');
export const ChannelCreatePermissionsDeny = FT<Values>('events/guilds-logs:channelCreatePermissionsDeny');
export const ChannelCreateNsfw = T('events/guilds-logs:channelCreateNsfw');
export const ChannelCreateTopic = FT<Value>('events/guilds-logs:channelCreateTopic');
export const ChannelCreateRateLimit = FT<Value<number>>('events/guilds-logs:channelCreateRateLimit');
export const ChannelCreateBitrate = FT<Value<number>>('events/guilds-logs:channelCreateBitrate');
export const ChannelCreateUserLimit = FT<Value<number>>('events/guilds-logs:channelCreateUserLimit');
export const ChannelDelete = T('events/guilds-logs:channelDelete');
export const ChannelUpdate = T('events/guilds-logs:channelUpdate');
export const ChannelUpdateBitrate = FT<Difference<number>>('events/guilds-logs:channelUpdateBitrate');
export const ChannelUpdateName = FT<Difference>('events/guilds-logs:channelUpdateName');
export const ChannelUpdateNsfw = FT<Difference>('events/guilds-logs:channelUpdateNsfw');
export const ChannelUpdateParent = FT<Difference>('events/guilds-logs:channelUpdateParent');
export const ChannelUpdateParentAdded = FT<Value>('events/guilds-logs:channelUpdateParentAdded');
export const ChannelUpdateParentRemoved = FT<Value>('events/guilds-logs:channelUpdateParentRemoved');
export const ChannelUpdatePosition = FT<Difference<number>>('events/guilds-logs:channelUpdatePosition');
export const ChannelUpdateAddedPermissionsAllow = FT<Values>('events/guilds-logs:channelUpdateAddedPermissionsAllow');
export const ChannelUpdateAddedPermissionsDeny = FT<Values>('events/guilds-logs:channelUpdateAddedPermissionsDeny');
export const ChannelUpdateAddedPermissionsTitle = FT<Value>('events/guilds-logs:channelUpdateAddedPermissionsTitle');
export const ChannelUpdateDeletedPermissionsTitle = FT<Value>('events/guilds-logs:channelUpdateDeletedPermissionsTitle');
export const ChannelUpdatePermissionsTitle = FT<Value>('events/guilds-logs:channelUpdatePermissionsTitle');
export const ChannelUpdateRemovedPermissionsAllow = FT<Values>('events/guilds-logs:channelUpdateRemovedPermissionsAllow');
export const ChannelUpdateRemovedPermissionsDeny = FT<Values>('events/guilds-logs:channelUpdateRemovedPermissionsDeny');
export const ChannelUpdateRateLimit = FT<Difference<number>>('events/guilds-logs:channelUpdateRateLimit');
export const ChannelUpdateRateLimitAdded = FT<Value<number>>('events/guilds-logs:channelUpdateRateLimitAdded');
export const ChannelUpdateRateLimitRemoved = FT<Value<number>>('events/guilds-logs:channelUpdateRateLimitRemoved');
export const ChannelUpdateTopic = FT<Difference>('events/guilds-logs:channelUpdateTopic');
export const ChannelUpdateTopicAdded = FT<Value>('events/guilds-logs:channelUpdateTopicAdded');
export const ChannelUpdateTopicRemoved = FT<Value>('events/guilds-logs:channelUpdateTopicRemoved');
export const ChannelUpdateType = FT<Difference>('events/guilds-logs:channelUpdateType');
export const ChannelUpdateUserLimit = FT<Difference<number>>('events/guilds-logs:channelUpdateUserLimit');
export const ChannelUpdateUserLimitAdded = FT<Value<number>>('events/guilds-logs:channelUpdateUserLimitAdded');
export const ChannelUpdateUserLimitRemoved = FT<Value<number>>('events/guilds-logs:channelUpdateUserLimitRemoved');
export const EmojiCreate = T('events/guilds-logs:emojiCreate');
export const EmojiCreateAnimated = T('events/guilds-logs:emojiCreateAnimated');
export const EmojiCreateUnAvailable = T('events/guilds-logs:emojiCreateUnAvailable');
export const EmojiCreateManaged = T('events/guilds-logs:emojiCreateManaged');
export const EmojiCreateRequiresColons = T('events/guilds-logs:emojiCreateRequiresColons');
export const EmojiCreateRoles = FT<Values>('events/guilds-logs:emojiCreateRoles');
export const EmojiDelete = T('events/guilds-logs:emojiDelete');
export const EmojiUpdate = T('events/guilds-logs:emojiUpdate');
export const EmojiUpdateAnimated = FT<Difference>('events/guilds-logs:emojiUpdateAnimated');
export const EmojiUpdateAvailable = FT<Difference>('events/guilds-logs:emojiUpdateAvailable');
export const EmojiUpdateManaged = FT<Difference>('events/guilds-logs:emojiUpdateManaged');
export const EmojiUpdateName = FT<Difference>('events/guilds-logs:emojiUpdateName');
export const EmojiUpdateRequiresColons = FT<Difference>('events/guilds-logs:emojiUpdateRequiresColons');
export const EmojiUpdateRolesAdded = FT<Values>('events/guilds-logs:emojiUpdateRolesAdded');
export const EmojiUpdateRolesRemoved = FT<Values>('events/guilds-logs:emojiUpdateRolesRemoved');
export const RoleCreate = T('events/guilds-logs:roleCreate');
export const RoleCreateColor = FT<Value>('events/guilds-logs:roleCreateColor');
export const RoleCreateHoist = T('events/guilds-logs:roleCreateHoist');
export const RoleCreateMentionable = T('events/guilds-logs:roleCreateMentionable');
export const RoleCreatePermissions = FT<Values>('events/guilds-logs:roleCreatePermissions');
export const RoleCreatePosition = FT<Value<number>>('events/guilds-logs:roleCreatePosition');
export const RoleDelete = T('events/guilds-logs:roleDelete');
export const RoleUpdate = T('events/guilds-logs:roleUpdate');
export const RoleUpdateColor = FT<Difference>('events/guilds-logs:roleUpdateColor');
export const RoleUpdateHoist = FT<Difference>('events/guilds-logs:roleUpdateHoist');
export const RoleUpdateMentionable = FT<Difference>('events/guilds-logs:roleUpdateMentionable');
export const RoleUpdateName = FT<Difference>('events/guilds-logs:roleUpdateName');
export const RoleUpdatePermissionsAdded = FT<Values>('events/guilds-logs:roleUpdatePermissionsAdded');
export const RoleUpdatePermissionsRemoved = FT<Values>('events/guilds-logs:roleUpdatePermissionsRemoved');
export const RoleUpdatePosition = FT<Difference<number>>('events/guilds-logs:roleUpdatePosition');
export const ServerUpdate = T('events/guilds-logs:serverUpdate');
export const ServerUpdateAfkChannelAdded = FT<Value>('events/guilds-logs:serverUpdateAfkChannelAdded');
export const ServerUpdateAfkChannelRemoved = FT<Value>('events/guilds-logs:serverUpdateAfkChannelRemoved');
export const ServerUpdateAfkChannel = FT<Difference>('events/guilds-logs:serverUpdateAfkChannel');
export const ServerUpdateAfkTimeout = FT<Difference<number>>('events/guilds-logs:serverUpdateAfkTimeout');
export const ServerUpdateBannerAdded = FT<Value>('events/guilds-logs:serverUpdateBannerAdded');
export const ServerUpdateBannerRemoved = FT<Value>('events/guilds-logs:serverUpdateBannerRemoved');
export const ServerUpdateBanner = FT<Difference>('events/guilds-logs:serverUpdateBanner');
export const ServerUpdateDefaultMessageNotifications = FT<Difference<Notifications>>('events/guilds-logs:serverUpdateDefaultMessageNotifications');
export const ServerUpdateDescriptionAdded = FT<Value>('events/guilds-logs:serverUpdateDescriptionAdded');
export const ServerUpdateDescriptionRemoved = FT<Value>('events/guilds-logs:serverUpdateDescriptionRemoved');
export const ServerUpdateDescription = FT<Difference>('events/guilds-logs:serverUpdateDescription');
export const ServerUpdateDiscoverySplashAdded = FT<Value>('events/guilds-logs:serverUpdateDiscoverySplashAdded');
export const ServerUpdateDiscoverySplashRemoved = FT<Value>('events/guilds-logs:serverUpdateDiscoverySplashRemoved');
export const ServerUpdateDiscoverySplash = FT<Difference>('events/guilds-logs:serverUpdateDiscoverySplash');
export const ServerUpdateExplicitContentFilter = FT<Difference<ExplicitContentFilterLevel>>('events/guilds-logs:serverUpdateExplicitContentFilter');
export const ServerUpdateFeaturesAdded = FT<Values>('events/guilds-logs:serverUpdateFeaturesAdded');
export const ServerUpdateFeaturesRemoved = FT<Values>('events/guilds-logs:serverUpdateFeaturesRemoved');
export const ServerUpdateIconAdded = FT<Value>('events/guilds-logs:serverUpdateIconAdded');
export const ServerUpdateIconRemoved = FT<Value>('events/guilds-logs:serverUpdateIconRemoved');
export const ServerUpdateIcon = FT<Difference>('events/guilds-logs:serverUpdateIcon');
export const ServerUpdateMaximumMembersAdded = FT<Value>('events/guilds-logs:serverUpdateMaximumMembersAdded');
export const ServerUpdateMaximumMembersRemoved = FT<Value>('events/guilds-logs:serverUpdateMaximumMembersRemoved');
export const ServerUpdateMaximumMembers = FT<Difference>('events/guilds-logs:serverUpdateMaximumMembers');
export const ServerUpdateMfaAdded = T('events/guilds-logs:serverUpdateMfaAdded');
export const ServerUpdateMfaRemoved = T('events/guilds-logs:serverUpdateMfaRemoved');
export const ServerUpdateName = FT<Difference>('events/guilds-logs:serverUpdateName');
export const ServerUpdateOwner = FT<Difference>('events/guilds-logs:serverUpdateOwner');
export const ServerUpdatePreferredLocale = FT<Difference>('events/guilds-logs:serverUpdatePreferredLocale');
export const ServerUpdatePremiumSubscriptionCountAdded = FT<Value>('events/guilds-logs:serverUpdatePremiumSubscriptionCountAdded');
export const ServerUpdatePremiumSubscriptionCountRemoved = FT<Value>('events/guilds-logs:serverUpdatePremiumSubscriptionCountRemoved');
export const ServerUpdatePremiumSubscriptionCount = FT<Difference>('events/guilds-logs:serverUpdatePremiumSubscriptionCount');
export const ServerUpdatePremiumTier = FT<Difference<number>>('events/guilds-logs:serverUpdatePremiumTier');
export const ServerUpdatePublicUpdatesChannelAdded = FT<Value>('events/guilds-logs:serverUpdatePublicUpdatesChannelAdded');
export const ServerUpdatePublicUpdatesChannelRemoved = FT<Value>('events/guilds-logs:serverUpdatePublicUpdatesChannelRemoved');
export const ServerUpdatePublicUpdatesChannel = FT<Difference>('events/guilds-logs:serverUpdatePublicUpdatesChannel');
export const ServerUpdateRegion = FT<Difference>('events/guilds-logs:serverUpdateRegion');
export const ServerUpdateRulesChannelAdded = FT<Value>('events/guilds-logs:serverUpdateRulesChannelAdded');
export const ServerUpdateRulesChannelRemoved = FT<Value>('events/guilds-logs:serverUpdateRulesChannelRemoved');
export const ServerUpdateRulesChannel = FT<Difference>('events/guilds-logs:serverUpdateRulesChannel');
export const ServerUpdateSplashAdded = FT<Value>('events/guilds-logs:serverUpdateSplashAdded');
export const ServerUpdateSplashRemoved = FT<Value>('events/guilds-logs:serverUpdateSplashRemoved');
export const ServerUpdateSplash = FT<Difference>('events/guilds-logs:serverUpdateSplash');
export const ServerUpdateSystemChannelFlagsAdded = FT<Values>('events/guilds-logs:serverUpdateSystemChannelFlagsAdded');
export const ServerUpdateSystemChannelFlagsRemoved = FT<Values>('events/guilds-logs:serverUpdateSystemChannelFlagsRemoved');
export const ServerUpdateSystemChannelAdded = FT<Value>('events/guilds-logs:serverUpdateSystemChannelAdded');
export const ServerUpdateSystemChannelRemoved = FT<Value>('events/guilds-logs:serverUpdateSystemChannelRemoved');
export const ServerUpdateSystemChannel = FT<Difference>('events/guilds-logs:serverUpdateSystemChannel');
export const ServerUpdateVanityUrlAdded = FT<Value>('events/guilds-logs:serverUpdateVanityUrlAdded');
export const ServerUpdateVanityUrlRemoved = FT<Value>('events/guilds-logs:serverUpdateVanityUrlRemoved');
export const ServerUpdateVanityUrl = FT<Difference>('events/guilds-logs:serverUpdateVanityUrl');
export const ServerUpdateVerificationLevel = FT<Difference<VerificationLevel>>('events/guilds-logs:serverUpdateVerificationLevel');
export const ServerUpdateWidgetChannelAdded = FT<Value>('events/guilds-logs:serverUpdateWidgetChannelAdded');
export const ServerUpdateWidgetChannelRemoved = FT<Value>('events/guilds-logs:serverUpdateWidgetChannelRemoved');
export const ServerUpdateWidgetChannel = FT<Difference>('events/guilds-logs:serverUpdateWidgetChannel');
export const ServerUpdateWidgetEnabled = T('events/guilds-logs:serverUpdateWidgetEnabled');
export const ServerUpdateWidgetDisabled = T('events/guilds-logs:serverUpdateWidgetDisabled');
